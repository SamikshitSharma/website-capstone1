const fs=require("fs"),os=require("os"),path=require("path"),cp=require("child_process");
const archive=path.join(process.cwd(),"site.tar.gz");
cp.execFileSync("tar",["-xzf",archive,"-C",process.cwd()],{stdio:"inherit"});
cp.execFileSync(process.execPath,[path.join(process.cwd(),"node_modules","next","dist","bin","next"),"build"],{stdio:"inherit"});