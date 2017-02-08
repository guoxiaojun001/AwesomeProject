package com.awesomeproject;

import android.app.Application;
import android.os.Environment;
import android.util.Log;

import com.awesomeproject.transmisson.TransMissonPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.io.File;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  public static final String JS_BUNDLE_REMOTE_URL = "https://raw.githubusercontent.com/fengjundev/React-Native-Remote-Update/master/remote/index.android.bundle";
  public static final String JS_BUNDLE_LOCAL_FILE = "index.android.bundle";
  public static final String JS_BUNDLE_LOCAL_PATH = Environment.getExternalStorageDirectory().toString() + File.separator + JS_BUNDLE_LOCAL_FILE;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {


    @Override
    protected String getJSBundleFile() {
      File file = new File(JS_BUNDLE_LOCAL_PATH);
      if(file != null && file.exists()){
        return JS_BUNDLE_LOCAL_PATH;
      }else{
        return super.getJSBundleFile();
      }
    }


    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage()
              ,
              new TransMissonPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
