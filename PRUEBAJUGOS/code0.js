gdjs.GameCode = {};
gdjs.GameCode.GDCameraObjects1= [];
gdjs.GameCode.GDCameraObjects2= [];
gdjs.GameCode.GDCameraObjects3= [];
gdjs.GameCode.GDCameraObjects4= [];
gdjs.GameCode.GDCameraObjects5= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerObjects5= [];
gdjs.GameCode.GDStartMarkerObjects1= [];
gdjs.GameCode.GDStartMarkerObjects2= [];
gdjs.GameCode.GDStartMarkerObjects3= [];
gdjs.GameCode.GDStartMarkerObjects4= [];
gdjs.GameCode.GDStartMarkerObjects5= [];
gdjs.GameCode.GDFallDeathObjects1= [];
gdjs.GameCode.GDFallDeathObjects2= [];
gdjs.GameCode.GDFallDeathObjects3= [];
gdjs.GameCode.GDFallDeathObjects4= [];
gdjs.GameCode.GDFallDeathObjects5= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDGroundObjects5= [];
gdjs.GameCode.GDGroundElevatedObjects1= [];
gdjs.GameCode.GDGroundElevatedObjects2= [];
gdjs.GameCode.GDGroundElevatedObjects3= [];
gdjs.GameCode.GDGroundElevatedObjects4= [];
gdjs.GameCode.GDGroundElevatedObjects5= [];
gdjs.GameCode.GDSpikeGroupObjects1= [];
gdjs.GameCode.GDSpikeGroupObjects2= [];
gdjs.GameCode.GDSpikeGroupObjects3= [];
gdjs.GameCode.GDSpikeGroupObjects4= [];
gdjs.GameCode.GDSpikeGroupObjects5= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDCoinObjects3= [];
gdjs.GameCode.GDCoinObjects4= [];
gdjs.GameCode.GDCoinObjects5= [];
gdjs.GameCode.GDCoinsScoreObjects1= [];
gdjs.GameCode.GDCoinsScoreObjects2= [];
gdjs.GameCode.GDCoinsScoreObjects3= [];
gdjs.GameCode.GDCoinsScoreObjects4= [];
gdjs.GameCode.GDCoinsScoreObjects5= [];
gdjs.GameCode.GDHighScoreObjects1= [];
gdjs.GameCode.GDHighScoreObjects2= [];
gdjs.GameCode.GDHighScoreObjects3= [];
gdjs.GameCode.GDHighScoreObjects4= [];
gdjs.GameCode.GDHighScoreObjects5= [];
gdjs.GameCode.GDTutorialTextObjects1= [];
gdjs.GameCode.GDTutorialTextObjects2= [];
gdjs.GameCode.GDTutorialTextObjects3= [];
gdjs.GameCode.GDTutorialTextObjects4= [];
gdjs.GameCode.GDTutorialTextObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects2);
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects1, gdjs.GameCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects2[i].getVariableNumber(gdjs.GameCode.GDGroundObjects2[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects2[k] = gdjs.GameCode.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects2[i].getVariableNumber(gdjs.GameCode.GDGroundElevatedObjects2[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects2[k] = gdjs.GameCode.GDGroundElevatedObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundObjects2 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects2[i].activateBehavior("Platform", false);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects2[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects2);
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects1, gdjs.GameCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects2[i].getVariableNumber(gdjs.GameCode.GDGroundObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects2[k] = gdjs.GameCode.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects2[i].getVariableNumber(gdjs.GameCode.GDGroundElevatedObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects2[k] = gdjs.GameCode.GDGroundElevatedObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundObjects2 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects2[i].activateBehavior("Platform", true);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects2[i].activateBehavior("Platform", true);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinsScore"), gdjs.GameCode.GDCoinsScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("GameHighscore", "GameHighscore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}{for(var i = 0, len = gdjs.GameCode.GDCoinsScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinsScoreObjects2[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects2[i].getBehavior("Text").setText("Highscore: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects1[i].getBehavior("Text").setText("Swipe to move and jump.");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects1[i].setCharacterSize(40);
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.GameCode.GDCameraObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{gdjs.scene3d.camera.setCameraZ(runtimeScene, (( gdjs.GameCode.GDCameraObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCameraObjects2[0].getZ()) + 5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDCameraObjects2.length !== 0 ? gdjs.GameCode.GDCameraObjects2[0] : null), true, "", 0);
}{gdjs.scene3d.camera.turnCameraTowardObject(runtimeScene, (gdjs.GameCode.GDPlayerObjects2.length !== 0 ? gdjs.GameCode.GDPlayerObjects2[0] : null), "", 0, false);
}{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, -(90), "", 0);
}{for(var i = 0, len = gdjs.GameCode.GDCameraObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects2[i].returnVariable(gdjs.GameCode.GDCameraObjects2[i].getVariables().getFromIndex(0)).setNumber((gdjs.GameCode.GDCameraObjects2[i].getX()) - (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getX()));
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (100), "", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.GameCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{gdjs.scene3d.camera.setCameraZ(runtimeScene, gdjs.evtTools.common.lerp(gdjs.scene3d.camera.getCameraZ(runtimeScene, "", 0), (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getBehavior("Object3D").getZ()), 0.05 * 60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GameCode.GDCameraObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDCameraObjects1[0].getX()), "", 0);
}{for(var i = 0, len = gdjs.GameCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects1[i].setX((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCameraObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects4);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects4);
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects3, gdjs.GameCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects4[i].getVariableNumber(gdjs.GameCode.GDGroundObjects4[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects4[k] = gdjs.GameCode.GDGroundObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects4.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects4[i].getVariableNumber(gdjs.GameCode.GDGroundElevatedObjects4[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects4[k] = gdjs.GameCode.GDGroundElevatedObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundObjects4 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects4[i].activateBehavior("Platform", false);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects4[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects3);
/* Reuse gdjs.GameCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects3[i].getVariableNumber(gdjs.GameCode.GDGroundObjects3[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects3[k] = gdjs.GameCode.GDGroundObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects3[i].getVariableNumber(gdjs.GameCode.GDGroundElevatedObjects3[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects3[k] = gdjs.GameCode.GDGroundElevatedObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundObjects3 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects3[i].activateBehavior("Platform", true);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects3[i].activateBehavior("Platform", true);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundElevatedObjects3Objects = Hashtable.newFrom({"GroundElevated": gdjs.GameCode.GDGroundElevatedObjects3});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects3, gdjs.GameCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects4[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(0)) < 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects4[k] = gdjs.GameCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9610900);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].returnVariable(gdjs.GameCode.GDPlayerObjects4[i].getVariables().getFromIndex(1)).add(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("RunRight");
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9610572);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).sub(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("RunLeft");
}
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__SwipeDirection_4way.func(runtimeScene, "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__Distance.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 100;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtsExt__SwipeGesture__HasSwipeJustEnded.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9602604);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Tween").hasFinished("Move") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].returnVariable(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Tween").removeTween("Move");
}
}
{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundElevatedObjects3Objects, true, runtimeScene, true);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects3[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Animation").getAnimationName() != "Run" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) != (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Tween").exists("Move")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionZTween("Move", (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().getFromIndex(1))) * 160, "linear", 300, false);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCoinObjects2[i].getVariableNumber(gdjs.GameCode.GDCoinObjects2[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCoinObjects2[k] = gdjs.GameCode.GDCoinObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("CoinsScore"), gdjs.GameCode.GDCoinsScoreObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "CoinPickUp", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}{runtimeScene.getScene().getVariables().getFromIndex(1).mul(1.03);
}{for(var i = 0, len = gdjs.GameCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RisingPitch");
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, gdjs.evtTools.runtimeScene.getTimeScale(runtimeScene) * 1.003);
}{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDCoinsScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinsScoreObjects2[i].setString("Coins: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2))));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpikeGroupObjects1Objects = Hashtable.newFrom({"SpikeGroup": gdjs.GameCode.GDSpikeGroupObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("FallDeath"), gdjs.GameCode.GDFallDeathObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getY() > (( gdjs.GameCode.GDFallDeathObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFallDeathObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GameState").setString("GameOver");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeGroup"), gdjs.GameCode.GDSpikeGroupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSpikeGroupObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSpikeGroupObjects1[i].getVariableNumber(gdjs.GameCode.GDSpikeGroupObjects1[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSpikeGroupObjects1[k] = gdjs.GameCode.GDSpikeGroupObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSpikeGroupObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSpikeGroupObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GameState").setString("GameOver");
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameCode.eventsList7(runtimeScene);
}


};gdjs.GameCode.asyncCallback9588252 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback9588252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback9528004 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback9528004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinsScore"), gdjs.GameCode.GDCoinsScoreObjects2);
{gdjs.evtTools.storage.writeNumberInJSONFile("GameHighscore", "GameHighscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{runtimeScene.getGame().getVariables().get("Score").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{for(var i = 0, len = gdjs.GameCode.GDCoinsScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinsScoreObjects2[i].setColor("248;231;28");
}
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3));
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9608564);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "DeathSound", false, 50, 0.7);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects2[i].getBehavior("Object3D").setRotationY(gdjs.GameCode.GDCoinObjects2[i].getBehavior("Object3D").getRotationY() + (60 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RisingPitch") > 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9543148);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0.8);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartMarkerObjects2Objects = Hashtable.newFrom({"StartMarker": gdjs.GameCode.GDStartMarkerObjects2});
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects3);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects3);
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects3[i].getVariableNumber(gdjs.GameCode.GDGroundObjects3[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects3[k] = gdjs.GameCode.GDGroundObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects3[i].getVariableNumber(gdjs.GameCode.GDGroundElevatedObjects3[i].getVariables().get("Lane")) != (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects3[k] = gdjs.GameCode.GDGroundElevatedObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundObjects3 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects3[i].activateBehavior("Platform", false);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects3[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects2);
/* Reuse gdjs.GameCode.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects2[i].getVariableNumber(gdjs.GameCode.GDGroundObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects2[k] = gdjs.GameCode.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects2[i].getVariableNumber(gdjs.GameCode.GDGroundElevatedObjects2[i].getVariables().get("Lane")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects2[k] = gdjs.GameCode.GDGroundElevatedObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundObjects2 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects2[i].activateBehavior("Platform", true);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects2[i].activateBehavior("Platform", true);
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStartMarkerObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getX()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getY()), false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Layout" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 9)), (( gdjs.GameCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDStartMarkerObjects2[0].getPointX("")) + 2048, (( gdjs.GameCode.GDStartMarkerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDStartMarkerObjects2[0].getPointY("")), 0);
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("StartMarker"), gdjs.GameCode.GDStartMarkerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDStartMarkerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDStartMarkerObjects2[i].getX() < (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getX()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDStartMarkerObjects2[k] = gdjs.GameCode.GDStartMarkerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDStartMarkerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStartMarkerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDStartMarkerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStartMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("GroundElevated"), gdjs.GameCode.GDGroundElevatedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SpikeGroup"), gdjs.GameCode.GDSpikeGroupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundObjects1[k] = gdjs.GameCode.GDGroundObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundElevatedObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundElevatedObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundElevatedObjects1[k] = gdjs.GameCode.GDGroundElevatedObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundElevatedObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSpikeGroupObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSpikeGroupObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSpikeGroupObjects1[k] = gdjs.GameCode.GDSpikeGroupObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSpikeGroupObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCoinObjects1[i].getX() < (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getX()) - 1060 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCoinObjects1[k] = gdjs.GameCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCoinObjects1 */
/* Reuse gdjs.GameCode.GDGroundObjects1 */
/* Reuse gdjs.GameCode.GDGroundElevatedObjects1 */
/* Reuse gdjs.GameCode.GDSpikeGroupObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDGroundElevatedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundElevatedObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDSpikeGroupObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpikeGroupObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Camera"), gdjs.GameCode.GDCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().get("GameState").setString("Playing");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{gdjs.evtsExt__SwipeGesture__EnableSwipeDetection.func(runtimeScene, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__SwipeGesture__SetLayer.func(runtimeScene, "UI", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationSpeedScale(1.3);
}
}{for(var i = 0, len = gdjs.GameCode.GDCameraObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCameraObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("GameState")) == "Playing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("GameState")) == "GameOver";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCameraObjects1.length = 0;
gdjs.GameCode.GDCameraObjects2.length = 0;
gdjs.GameCode.GDCameraObjects3.length = 0;
gdjs.GameCode.GDCameraObjects4.length = 0;
gdjs.GameCode.GDCameraObjects5.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects5.length = 0;
gdjs.GameCode.GDStartMarkerObjects1.length = 0;
gdjs.GameCode.GDStartMarkerObjects2.length = 0;
gdjs.GameCode.GDStartMarkerObjects3.length = 0;
gdjs.GameCode.GDStartMarkerObjects4.length = 0;
gdjs.GameCode.GDStartMarkerObjects5.length = 0;
gdjs.GameCode.GDFallDeathObjects1.length = 0;
gdjs.GameCode.GDFallDeathObjects2.length = 0;
gdjs.GameCode.GDFallDeathObjects3.length = 0;
gdjs.GameCode.GDFallDeathObjects4.length = 0;
gdjs.GameCode.GDFallDeathObjects5.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDGroundElevatedObjects1.length = 0;
gdjs.GameCode.GDGroundElevatedObjects2.length = 0;
gdjs.GameCode.GDGroundElevatedObjects3.length = 0;
gdjs.GameCode.GDGroundElevatedObjects4.length = 0;
gdjs.GameCode.GDGroundElevatedObjects5.length = 0;
gdjs.GameCode.GDSpikeGroupObjects1.length = 0;
gdjs.GameCode.GDSpikeGroupObjects2.length = 0;
gdjs.GameCode.GDSpikeGroupObjects3.length = 0;
gdjs.GameCode.GDSpikeGroupObjects4.length = 0;
gdjs.GameCode.GDSpikeGroupObjects5.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDCoinObjects4.length = 0;
gdjs.GameCode.GDCoinObjects5.length = 0;
gdjs.GameCode.GDCoinsScoreObjects1.length = 0;
gdjs.GameCode.GDCoinsScoreObjects2.length = 0;
gdjs.GameCode.GDCoinsScoreObjects3.length = 0;
gdjs.GameCode.GDCoinsScoreObjects4.length = 0;
gdjs.GameCode.GDCoinsScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreObjects1.length = 0;
gdjs.GameCode.GDHighScoreObjects2.length = 0;
gdjs.GameCode.GDHighScoreObjects3.length = 0;
gdjs.GameCode.GDHighScoreObjects4.length = 0;
gdjs.GameCode.GDHighScoreObjects5.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects5.length = 0;

gdjs.GameCode.eventsList18(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
