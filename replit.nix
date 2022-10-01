{ pkgs }: {
	deps = [
		pkgs.ruby_3_0
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}