with import <nixpkgs> {};
stdenv.mkDerivation rec {
  name = "nestJS";
  env = buildEnv { name = name; paths = buildInputs; };
  buildInputs = [
    nodejs-14_x
    yarn
    nodePackages."@nestjs/cli"
    nodePackages.typescript
  ];
}
