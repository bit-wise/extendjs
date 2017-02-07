/*
    onReady callback function
*/

document.ready = function (callback, context) {
    'use strict';

    // The public function name defaults to document.ready
    // but you can pass in your own object and own function name and those will be used
    // if you want to put them in a different namespace
    var readyList = [],
        readyFired = false,
        readyEventHandlersInstalled = false,
        i;

    function ready() {
        if (!readyFired) {
            // this must be set to true before we start calling callbacks
            readyFired = true;
            for (i = 0; i < readyList.length; i) {
                // if a callback here happens to add new ready handlers,
                // the ready() function will see that it already fired
                // and will schedule the callback to run right after
                // this event loop finishes so all handlers will still execute
                // in order and no new ones will be added to the readyList
                // while we are processing the list
                readyList[i].fn.call(window, readyList[i].ctx);
                i += 1;
            }
            // allow any closures held by these functions to free
            readyList = [];
        }
    }

    function readyStateChange() {
        if (document.readyState === "complete") {
            ready();
        }
    }

    return {

        // This is the one public interface
        // ready(fn, context);
        // the context argument is optional - if present, it will be passed
        // as an argument to the callback
        init: (function () {
            if (typeof callback !== "function") {
                throw new TypeError("callback for ready(fn) must be a function");
            }
            // if ready has already fired, then just schedule the callback
            // to fire asynchronously, but right away
            if (readyFired) {
                setTimeout(function () {
                    callback(context);
                }, 1);
                return;
            } else {
                // add the function and context to the list
                readyList.push({
                    fn: callback,
                    ctx: context
                });
            }
            // if document already ready to go, schedule the ready function to run
            if (document.readyState === "complete") {
                setTimeout(ready, 1);
            } else if (!readyEventHandlersInstalled) {
                // otherwise if we don't have event handlers installed, install them
                if (document.addEventListener) {
                    // first choice is DOMContentLoaded event
                    document.addEventListener("DOMContentLoaded", ready, false);
                    // backup is window load event
                    window.addEventListener("load", ready, false);
                } else {
                    // must be IE
                    document.attachEvent("onreadystatechange", readyStateChange);
                    window.attachEvent("onload", ready);
                }
                readyEventHandlersInstalled = true;
            }
        }())
    };
};