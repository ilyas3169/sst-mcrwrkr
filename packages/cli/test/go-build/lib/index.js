import * as sst from "@serverless-stack/resources";

class MySampleStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new sst.Function(this, "RootLambda", {
      runtime: "go1.x",
      handler: "src-root/main.go",
    });
    new sst.Function(this, "WithSrcPathWithFilename", {
      runtime: "go1.x",
      srcPath: "with-srcPath-with-filename",
      handler: "src/main.go",
    });
    new sst.Function(this, "WithSrcPathNoFilename", {
      runtime: "go1.x",
      srcPath: "with-srcPath-no-filename",
      handler: "src",
    });
    new sst.Function(this, "NoSrcPathWithFilename", {
      runtime: "go1.x",
      handler: "no-srcPath-with-filename/src/main.go",
    });
    new sst.Function(this, "NoSrcPathNoFilename", {
      runtime: "go1.x",
      handler: "no-srcPath-no-filename/src",
    });
  }
}

export default function main(app) {
  new MySampleStack(app, "sample");
}
