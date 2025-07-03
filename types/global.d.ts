import { EnvirData as _EnvirData } from "../utils/env/env.data";

declare global {
  var environmentVariables: () => _EnvirData;
}
