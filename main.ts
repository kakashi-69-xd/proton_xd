import { instantiate,build } from "./lib/rs_lib.generated.js";
import { getPermissions,config } from "./proton-xd.config.ts";

await instantiate();
const args: string[]=(await getPermissions(await config()));

args.unshift("run");
args.push("proton-xd/src/main.ts");

switch(Deno.args[0]) {
  case "dev":case "d":
    dev();
  break;
  case "build":case "b":
    build(args.with(0,"compile"));
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
  //todo;
}


async function cmd(path: string,args: string[]) {
  const cmd=new Deno.Command(path,{
    args: args
  }).outputSync();
  
  if(cmd.stderr)
  Deno.stderr.writeSync(cmd.stderr);
  else
  Deno.stdout.writeSync(cmd.stdout);
}