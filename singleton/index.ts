import UniquePizza from "./UniquePizza";

let aPizza = UniquePizza.getInstance();
aPizza.contents = "ContentsA";
aPizza.describe();

let theSamePizza = UniquePizza.getInstance();
theSamePizza.contents = "ContentsB";

aPizza.describe();
