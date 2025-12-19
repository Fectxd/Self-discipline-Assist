import java.util.Properties
import java.io.FileInputStream

plugins {
    id("com.android.application")
    id("kotlin-android")
    // The Flutter Gradle Plugin must be applied after the Android and Kotlin Gradle plugins.
    id("dev.flutter.flutter-gradle-plugin")
}

android {
    namespace = "com.fectxd.selfdiscipline"
    compileSdk = flutter.compileSdkVersion
    ndkVersion = flutter.ndkVersion

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
        // 允许使用部分 Java 新 API（供依赖要求的 desugaring）
        isCoreLibraryDesugaringEnabled = true
    }

    kotlinOptions {
        jvmTarget = JavaVersion.VERSION_17.toString()
    }

    defaultConfig {
        applicationId = "com.fectxd.selfdiscipline"
        minSdk = flutter.minSdkVersion
        targetSdk = flutter.targetSdkVersion
        versionCode = 200
        versionName = "2.0.0"
    }

    buildTypes {
        release {
            // Release 构建使用正式签名（从 key.properties 读取）。
            val keystoreProps = Properties()
            val keystoreFile = rootProject.file("../key.properties")
            if (keystoreFile.exists()) {
                keystoreProps.load(FileInputStream(keystoreFile))

                signingConfigs.create("release") {
                    storeFile = file(keystoreProps.getProperty("storeFile"))
                    storePassword = keystoreProps.getProperty("storePassword")
                    keyAlias = keystoreProps.getProperty("keyAlias")
                    keyPassword = keystoreProps.getProperty("keyPassword")
                }

                signingConfig = signingConfigs.getByName("release")
                isMinifyEnabled = false
            } else {
                // 回退到 debug 签名，避免无 key.properties 时构建失败。
                signingConfig = signingConfigs.getByName("debug")
            }
        }
    }
}

flutter {
    source = "../.."
}

dependencies {
    // 为依赖（如 flutter_local_notifications）开启核心库 desugaring 支持
    coreLibraryDesugaring("com.android.tools:desugar_jdk_libs:2.0.4")
}
