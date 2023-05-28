import { instantiate,dev,build,start,clean } from "./lib/rs_lib.generated.js";

await instantiate();


switch(Deno.args[0]) {
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
    clean();
  break;
}