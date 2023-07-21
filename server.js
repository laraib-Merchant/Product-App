const getData = () => {
    axios.get("https://lazy-gold-katydid-yoke.cyclic.app/products")
        .then((res) => {
            const products = res.data.data;
            products.map((item) => {
                document.querySelector("#table").innerHTML += `
            <tr id=${item.id}>
            <td id="name">${item.name}</td>
            <td id="price">${item.price}</td>
            <td id="description">${item.description}</td>
            <td><button id="edit" onclick=updayDatad("${item.id}")><i class="fa-solid fa-pencil"></i></button></td>
            <td><button id="delete" onclick=deleteDatad("${item.id}")><i class="fa-solid fa-trash"></i></button></td>
            </tr>
            `
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

function updayDatad(id) {
    const edit = document.getElementById(`${id}`);
    const name = edit.querySelector("#name").innerText;
    const price = edit.querySelector("#price").innerText;
    const description = edit.querySelector("#description").innerText;
    document.getElementById(`${id}`).innerHTML = `
        <tr>
            <td><input  id="${id}-name"  value="${name}" /></td>
            <td><input  id="${id}-price" value=${price} /></td>
            <td><input  id="${id}-description" value="${description}"  /></td>
            <td><button onclick=updateData("${id}")><i class="fa-solid fa-pencil"></i></button></td>
            <td><button id="delete" onclick=deleteDatad("${id}")><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `
}
function deleteDatad(id) {
    axios.delete(`https://lazy-gold-katydid-yoke.cyclic.app/product/${id}`)
        .then((res) => {
            alert("Product deleted Succesfully")
            window.location.reload()
            // console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
}
function updateData(id) {
    axios.put(`https://lazy-gold-katydid-yoke.cyclic.app/product/${id}`, {
        name: document.getElementById(`${id}-name`).value,
        price: document.getElementById(`${id}-price`).value,
        description: document.getElementById(`${id}-description`).value,
    })
        .then((res) => {
            alert("Product Updated Succesfully")
            window.location.reload()
        })
        .catch((err) => {
            console.log(err);
        })
}
getData()

const addBtn = document.getElementById("add")

addBtn.addEventListener("click", () => {
    axios.post("https://lazy-gold-katydid-yoke.cyclic.app/product", {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        price: document.querySelector("#price").value,
    })
        .then((res) => {
            alert("Product Added Succesfully")
            window.location.reload()
        })
        .catch((err) => {
            console.log(err);
        })
})
