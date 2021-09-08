//
//  Bulb.m
//  DynamicIcon
//
//  Created by Mukesh Jha on 07/09/21.
//

#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(AppIcon, NSObject)
//RCT_EXTERN_METHOD(turnOn)
RCT_EXTERN_METHOD(setAppIcon:(NSString *)name)
RCT_EXTERN_METHOD(getStatus: (RCTResponseSenderBlock)callback)
@end
