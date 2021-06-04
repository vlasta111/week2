function onClick(text) {
	alert(text)
}	

var line = "line";
var number = 2;
var bool = true;

class Bed {
	constructor(bedName, bedHeigth, bedWidth){
		this.Name = bedName
		this.Width = bedWidth
		this.Heigth = bedHeigth
	}
}

var bedsArray = []

for(let i = 0; i < 100; i = i + 1) {
	bedsArray.push(
		new Bed(
			Math.ceil(Math.random() * 10000),
			Math.random() * 100,
			Math.random() * 100,
		)
	)
}

var root = document.getElementById("root")

for(let i = 0; i < 100; i++) {
	var bedDiv = document.createElement("DIV")
	var bedName = document.createElement("H3")
	var bedWidth = document.createElement("DIV")
	var bedHeight = document.createElement("DIV")
	var button = document.createElement("BUTTON")

	bedName.append(bedsArray[i].Name)
	bedWidth.append(bedsArray[i].Width + " cm")
	bedHeight.append(bedsArray[i].Heigth + " cm")
	button.append("click me")
	button.onclick = () => onClick(bedsArray[i].Name)
	
	bedName.style.textAlign = "center"
	bedWidth.style.marginBottom = "5px"
	bedHeight.style.marginBottom = "5px"

	bedDiv.appendChild(bedName)
	bedDiv.appendChild(bedWidth)
	bedDiv.appendChild(bedHeight)
	bedDiv.appendChild(button)

	bedDiv.className="bedCard"

	root.appendChild(bedDiv)
}