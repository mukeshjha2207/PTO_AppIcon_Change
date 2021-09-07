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
static var isToggle = false
  
@objc
static func requiresMainQueueSetup() -> Bool {
    return true
}
  
@objc
 func turnOn() {
  AppIcon.isToggle = true
  print("AppIcon is now On")
 }
  
  @objc
  func turnOff() {
    AppIcon.isToggle = false
  print("Bulb is now OFF")
  }
  
  
  @objc
  func getStatus(_ callback: RCTResponseSenderBlock) {
  callback([NSNull(), AppIcon.isToggle])
  }
}


