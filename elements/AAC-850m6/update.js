function(instance, properties, context) {
    if (instance.data.height != properties.bubble.height()){
    	instance.data.height = properties.bubble.height();
        instance.data.rescale();
    }
	if (instance.data.firstRun){
        instance.data.firstRun = false;
        instance.data.isDark = properties.default_value;
        if (instance.data.isDark) {
        	let x_value = 0;
            if (instance.data.isDark){x_value = properties.bubble.width() - properties.bubble.height()}            
            instance.canvas.querySelector('.toggle-thumb').style.transform = "translateX("+x_value+"px)";
            instance.publishState("is_dark",instance.data.isDark);
        }
        instance.canvas.onclick = function () {
            instance.data.isDark = !instance.data.isDark;
            let x_value = 0;
            if (instance.data.isDark){x_value = properties.bubble.width() - properties.bubble.height()}            
            instance.canvas.querySelector('.toggle-thumb').style.transform = "translateX("+x_value+"px)";
            instance.publishState("is_dark",instance.data.isDark);
            instance.triggerEvent("clicked");
        }
    }
    
    if (instance.data.sunIcon != properties.sun_emoji){
    	instance.data.sunIcon = properties.sun_emoji;
        instance.canvas.querySelector('.toggle-sun').innerHTML = instance.data.sunIcon;
    }
    if (instance.data.moonIcon != properties.moon_emoji){
    	instance.data.moonIcon = properties.moon_emoji;
        instance.canvas.querySelector('.toggle-moon').innerHTML = instance.data.moonIcon;
    }
    if (instance.data.trackColor != properties.track_color){
    	instance.data.trackColor = properties.track_color;
        instance.canvas.querySelector('.toggle-track').style.backgroundColor = instance.data.trackColor;
    }
    
    if (instance.data.toggleColor != properties.toggle_color){
    	instance.data.toggleColor = properties.toggle_color;
        instance.canvas.querySelector('.toggle-thumb').style.backgroundColor = instance.data.toggleColor;
    }

}