let
  nixpkgs = import ./dep/nixpkgs {};
  nix-thunk = import ./dep/nix-thunk { pkgs = nixpkgs; };
  sources = nix-thunk.mapSubdirectories nix-thunk.thunkSource ./dep;
  gitignoreSource = (import sources."gitignore.nix" {}).gitignoreSource;

  shell = nixpkgs.mkShell {
    nativeBuildInputs = with nixpkgs;
      [ nodejs yarn
        python
        pkg-config libusb
      ];
  };

in {
  inherit nixpkgs shell;
}
