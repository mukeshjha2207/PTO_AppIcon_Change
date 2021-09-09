package com.dynamicicon;


import android.app.Activity;
import android.content.ComponentName;
import android.content.pm.PackageManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class AppIcon extends ReactContextBaseJavaModule {
    private static String currentIcon = "Default";
    private Map<String, String> icons;

    public AppIcon(ReactApplicationContext reactContext) {

        super(reactContext);
        icons = new HashMap<String, String>();
        icons.put("K2Bank", "MainActivityK2Bank");
        icons.put("BeyondBank", "MainActivityBeyondBank");
        icons.put("Default", "MainActivity");

    }


    @ReactMethod
    public void getStatus(
            Callback successCallback) {
        successCallback.invoke(null, currentIcon);

    }


    @ReactMethod
    public void setAppIcon(String name) {
        currentIcon = name;
        Activity activity = getCurrentActivity();
        PackageManager manager = activity.getPackageManager();
        if (activity == null) {
            return;
        }
        try {
            manager.setComponentEnabledSetting(new ComponentName(activity, "com.dynamicicon." + icons.get(name))
                    , PackageManager.COMPONENT_ENABLED_STATE_ENABLED, PackageManager.DONT_KILL_APP);
        } catch (Exception e) {

        }
        for (Map.Entry<String, String> entry : icons.entrySet()) {
            if (!entry.getValue().equals(icons.get(name))) {
                try {
                    manager.setComponentEnabledSetting(new ComponentName(activity, "com.dynamicicon." + entry.getValue())
                            , PackageManager.COMPONENT_ENABLED_STATE_DISABLED, PackageManager.DONT_KILL_APP);
                } catch (Exception e) {

                }

            }
        }

    }

//    @ReactMethod
//    public void turnOn() {
//        isOn = true;
//        System.out.println("Bulb is turn ON");
//    }
//
//    @ReactMethod
//    public void turnOff() {
//        isOn = false;
//        System.out.println("Bulb is turn OFF");
//    }

    @Override
    public String getName() {
        return "AppIcon";
    }

}

