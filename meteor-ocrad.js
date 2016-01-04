Meteor.startup(function() {
  "use strict";

  if (typeof OCRAD !== 'undefined') {
    console.log("Not undefined");
  }

  /*( OCRAD => {
    console.log(arguments);
    if (  typeof OCRAD === 'object' ) {
      try {
        Object.defineProperty(OCRAD, 'check', {
          enumerable: false,
          configurable: true,
          writable: false,
          value ( image )  {
            if ( typeof this.image !== 'object' &&
            ! ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) &&
              ! ( typeof ImageData !== 'undefined' && image instanceof ImageData )
                 ) {
              throw new Meteor.Error("Wrong Image Format", "Image is not a canvas element, context 2d instance or Image Data instance.");
            }
          }
        });
        console.log("OCRAD returned");
        return OCRAD;
      } catch ( e ) {
        if ( err instanceof Meteor.Error ) {
          console.log(err.reason, err.details);
        } else {
          console.log("OCRAD error:", err);
        }
      }
    } else {
      console.log("OCRAD object is not in scope. Is the ocrad.js NPM dependency installed?");
    }

  })(OCRAD);*/

});
