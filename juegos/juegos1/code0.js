gdjs.Juego_32principalCode = {};
gdjs.Juego_32principalCode.GDNewTiledSpriteObjects1= [];
gdjs.Juego_32principalCode.GDNewTiledSpriteObjects2= [];
gdjs.Juego_32principalCode.GDPlayerObjects1= [];
gdjs.Juego_32principalCode.GDPlayerObjects2= [];
gdjs.Juego_32principalCode.GDPlataformaObjects1= [];
gdjs.Juego_32principalCode.GDPlataformaObjects2= [];
gdjs.Juego_32principalCode.GDENEMIGOObjects1= [];
gdjs.Juego_32principalCode.GDENEMIGOObjects2= [];


gdjs.Juego_32principalCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Juego_32principalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Juego_32principalCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Juego_32principalCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Juego_32principalCode.GDPlayerObjects1.length = 0;
gdjs.Juego_32principalCode.GDPlayerObjects2.length = 0;
gdjs.Juego_32principalCode.GDPlataformaObjects1.length = 0;
gdjs.Juego_32principalCode.GDPlataformaObjects2.length = 0;
gdjs.Juego_32principalCode.GDENEMIGOObjects1.length = 0;
gdjs.Juego_32principalCode.GDENEMIGOObjects2.length = 0;

gdjs.Juego_32principalCode.eventsList0(runtimeScene);

return;

}

gdjs['Juego_32principalCode'] = gdjs.Juego_32principalCode;
