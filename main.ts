import { instantiate,build } from "./lib/rs_lib.generated.js";
import { getPermissions,config } from "./proton-xd.config.ts";

await instantiate();
const permissions: string[]=(await getPermissions(await config()));

console.log(permissions);



switch(Deno.args[0]) {
  case "dev":case "d":
    dev();
  break;
  case "build":case "b":
    build(permissions);
  break;
  case "start":case "s":
    start();
  break;
  case "clean":case "c":
    clean();
  break;
}


function dev() {
  cmd("deno",["run",...permissions,"proton-xd/src/main.ts"]);
}

function start() {
  
}

function clean() {
  Deno.removeSync("build");
}

function cmd(path: string,args: string[]) {
  const cmd=new Deno.Command(path,{
    args: args
  }).outputSync();
  
  if(cmd.stderr)
  Deno.stderr.writeSync(cmd.stderr);
  else
  Deno.stdout.writeSync(cmd.stdout);
}