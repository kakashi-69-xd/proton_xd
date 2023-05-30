import { instantiate,build as rustBuild } from "./lib/rs_lib.generated.js";
import { getPermissions,config } from "./proton-xd.config.ts";



await instantiate();
const cfg=await config();
const args: string[]=(await getPermissions(cfg));

args.unshift("run");
args.push("proton-xd/src/main.ts");



const build=()=> rustBuild(args.with(0,"compile"));;


switch(Deno.args[0]) {// miss rusts match case
  case "dev":case "d":
    dev();
  break;
  case "build":case "b":
    build();
  break;
  case "start":case "s":
    start();
  break;
  case "clean":case "c":
    Deno.removeSync("build",{
      recursive: true
    });
  break;
}


function dev() {
  cmd("deno",args);
}

function start() {
  try {
    cmd(`build/${cfg.name}`);
  } catch {
    build();
    start();
  }
}


function cmd(path: string,args?: string[]) {
  const cmd=new Deno.Command(path,{
    args: args
  }).outputSync();
  
  if(cmd.success)
  Deno.stderr.writeSync(cmd.stderr);
  else
  throw new Error("failed");
}