function(instance, properties) {
	instance.canvas.innerHTML = `<style>
    .toggle-track {
        background-color: #1a1a1a;
        border-radius: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        user-select: none;
        width: 100%;
    }

    .toggle-sun {
        align-items: center;
        display: flex;
        font-size: 12px;
        padding: 0 4px;
        width: 50%;
        height: 100%;
        justify-content: flex-end;
    }
    .toggle-moon {
        align-items: center;
        display: flex;
        font-size: 12px;
        padding: 0 4px;
        width: 50%;
        height: 100%;
        justify-content: flex-start;
    }

    .toggle-thumb {
        background-color: #fff;
        border-radius: 50%;
        left: 2px;
        position: absolute;
        transition: transform .5s cubic-bezier(.23,1,.32,1);
    }

    
</style><div class="toggle-track"><div class="toggle-moon">${properties.moon_emoji}</div><div class="toggle-sun">${properties.sun_emoji}</div><div class="toggle-thumb"></div></div>`;
	instance.canvas.querySelector('.toggle-thumb').style.backgroundColor = properties.toggle_color;
    instance.canvas.querySelector('.toggle-track').style.backgroundColor = properties.track_color;
    let ratio = properties.bubble.height() / 24;
    instance.canvas.querySelector('.toggle-thumb').style.width = properties.bubble.height() - 4 + "px";
    instance.canvas.querySelector('.toggle-thumb').style.height = properties.bubble.height() - 4 + "px";
    instance.canvas.querySelector('.toggle-moon').style.fontSize = ratio * 100 + "%";
    instance.canvas.querySelector('.toggle-sun').style.fontSize = ratio * 100 + "%";
}