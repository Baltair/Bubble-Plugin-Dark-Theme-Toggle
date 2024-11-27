function(instance, context) {
	instance.canvas.innerHTML = `<div class="toggle-track"><div class="toggle-moon">🌙</div><div class="toggle-sun">☀️</div><div class="toggle-thumb"></div></div>`;
    instance.data.firstRun = true;
    instance.data.rescale = function(){
        let ratio = instance.data.height / 24;
        instance.canvas.querySelector('.toggle-thumb').style.width = instance.data.height - 4 + "px";
        instance.canvas.querySelector('.toggle-thumb').style.height = instance.data.height - 4 + "px";
        instance.canvas.querySelector('.toggle-moon').style.fontSize = ratio * 100 + "%";
        instance.canvas.querySelector('.toggle-sun').style.fontSize = ratio * 100 + "%";
    }
}