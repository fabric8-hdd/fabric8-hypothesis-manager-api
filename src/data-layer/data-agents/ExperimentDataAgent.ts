import { logger } from "../../middleware/common/logging";
import { ExperimentModel } from "../models/ExperimentModel";

export class ExperimentDataAgent{

    async getExperimentById(experimentId: string): Promise<any>{
        if (experimentId !== "aaaaa") {
           return  {thrown: true, status: 404,  message: "incorrect user id"};
        }
        // ToDo: Change to db query once db integration is intact
        let result = new ExperimentModel(
            "aaaaa",
            "stat > 40",
            "admin",
            new Date().toLocaleString(),
        );
        return result;
    }
}
