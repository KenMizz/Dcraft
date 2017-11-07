/*
Dcraft
游乐12制作
我的个人站:https://kenmizz.github.io
使用CC-BY-NC-SA4.0版权协议
协议说明:
1.署名 — 您必须给出合适的姓名或名称，提供许可协议链接，同时表明如果有修改。您可以合理的方式这样做，但是部分以任何方式暗示许可人同意您或您的使用。
2.非商业性使用 — 您不得将本作品用于商业目的。 
3.相同方式共享 — 如果您再混合、转换或者基于本作品进行创作，您必须基于与原先许可协议相同的许可协议 分发您贡献的作品。

没有附加限制 — 您不得适用法律术语或者 技术措施 从而限制其他人做许可协议允许的事情。
-----
Dcraft
Made by KenMizz
My Site:https://kenmizz.github.io
Using CC-BY-NC-SA4.0 Copyright License
License details:
1.Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. 
2.NonCommercial — You may not use the material for commercial purposes. 
3.ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original. 

No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits. 
*/
/*int*/
//version
const CurrentVersion="1.0";
var NewVersion="unknown";
//Thread
const ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
//sdcard
var sdcard=android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
//CurrentFolderPath
const DcraftFolder=sdcard+"/games/com.mojang/Dcraft";
const ModFolder=sdcard+"/games/com.mojang/Dcraft/Mods";
//GameMode
const GameMode={
    SURVIVAL:0,
    CREATIVE:1
}
//AutoID
var AutoID=[];
//Debug
const DebugMode=true;
const isAutoCheckUpdate=true;
//Weapon
var WeaponData=[];
//Tool
var ToolData=[];
const ToolType={
    SWORD:1,
    AXE:2,
    PICKAXE:3,
    SHOVEL:4,
    NULL:5
}
/*functions(custom)*/
//dip2px
function dip2px(ctx,dips){
    return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)
}
//getColor
function getColor(HTMLColor){
    return android.graphics.Color.parseColor(HTMLColor)
}
//ID
function ID(){
    for(var i=0;i==3000;i++){
        if(!Item.isValidItem(i)){
            AutoID.push(i)
            print(i);
        }
    }
}
//LanguageChange
function LanguageChange(){
    
}
//defineTool
function defineTool(toolid,tooltexturename,toolmeta,toolname,toolmaxdamage,tooldamage,tooltype,canbreak){
    try{
        if(tooltexturename==null){
            tooltexturename="apple";
        }
        if(toolmeta==null){
            toolmeta=0;
        }
        if(toolname==null){
            toolname="No Name";
        }
        if(toolmaxdamage==null){
            toolmaxdamage=100;
        }
        if(tooldamage==null){
            tooldamage=1;
        }
        if(tooltype==null){
            tooltype=ToolType.NULL;
        }
        ToolData.push({ToolID:toolid,ToolMeta:toolmeta,ToolMaxDamage:toolmaxdamage,ToolDamage:tooldamage,ToolType:tooltype,CanBreak:canbreak});
    }
    catch(err){
        errText=err;
        errorUI();
    }
}
/*functions(Blocklauncher)*/
//newLevel
function newLevel(){
    //TODO
}
/*UI*/