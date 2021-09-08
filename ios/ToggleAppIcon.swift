//
//  ChnageIcon.swift
//  DynamicIcon
//
//  Created by Mukesh Jha on 07/09/21.
//

import Foundation
@objc(AppIcon)
class AppIcon: NSObject {
@objc
static var icon = "K2Bank"
  
@objc
static func requiresMainQueueSetup() -> Bool {
    return true
}
  
  
  @objc
  func setAppIcon(_ name:String) {
    UIApplication.shared.setAlternateIconName(name)
    AppIcon.icon=name
    print("AppIcon set to "+name)
   
   }
  
  
//@objc
// func turnOn() {
// // UIApplication.shared.setAlternateIconName("checked")
//  AppIcon.isToggle = true
//  print("AppIcon is now On")
//
// }
//
//  @objc
//  func turnOff() {
//   // UIApplication.shared.setAlternateIconName("cancel")
//    AppIcon.isToggle = false
//  print("Bulb is now OFF")
//  }
  
  
  @objc
  func getStatus(_ callback: RCTResponseSenderBlock) {
      callback([NSNull(), AppIcon.icon])
  }
}


