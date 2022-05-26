let string ="";
let count = 0;

for (let i = 1; i <= 5; i++)
{
    let row = document.createElement("div");
    row.style.display = "flex"
    for (let j = 1; j <= 5; j++)
    {
        let box = document.createElement("div");
        box.innerHTML = String.fromCharCode(count+65);
        box.className="square";
        row.appendChild(box);
        // document.write(String.fromCharCode(count+65));
        count++;
    }
    document.body.appendChild(row);
}