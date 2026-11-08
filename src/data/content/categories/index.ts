import type { Category } from "../types";
import { softwareDevelopment } from "./software-development";
import { devops } from "./devops";
import { securityData } from "./security-data";
import { aiAutomation } from "./ai-automation";

export const categories: Category[] = [
  softwareDevelopment,
  devops,
  securityData,
  aiAutomation,
];
