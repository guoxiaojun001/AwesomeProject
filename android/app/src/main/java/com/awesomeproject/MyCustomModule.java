package com.awesomeproject;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

/**
 * Created by HP on 2017/2/7.
 */

public class MyCustomModule extends ReactContextBaseJavaModule {

    public MyCustomModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    // Available as NativeModules.MyCustomModule.processString
    @ReactMethod
    public void processString(String input, Callback callback) {
        callback.invoke(input.replace("Goodbye", "Hello"));
    }

    @Override
    public String getName() {
        return null;
    }
}
