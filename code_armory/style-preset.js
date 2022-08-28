    /* stylePreset */
    const flexSetting = function(element, direction="row") {
      if(typeof direction === "string") {
        element.style.display = "flex" ;
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
      } else {
        console.log("need to second parameter type check");
      }
    };

    const widthHeightSetting = function(element, width, height) {
      element.style.width = width;
      element.style.height = height;
    };

    const browserReset = function() {
      body.style.padding = 0;
      body.style.margin = 0;
      body.style.boxSizing = 'border-box';
    };

    // body
    const body = document.body;
    browserReset();

    // body > root
    const root = document.createElement('div');
    widthHeightSetting(root, "100vw", "100vh");
    flexSetting(root,"column");
    body.appendChild(root);