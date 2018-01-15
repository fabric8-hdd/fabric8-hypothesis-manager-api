import { Route, Response, Get, Header, Body, Security, Controller, Path } from 'tsoa';

import { IExperimentResponse, IErrorResponse} from '../responses/index'
import { ExperimentDataAgent } from '../../data-layer/data-agents/ExperimentDataAgent';
import { ExperimentModel } from '../../data-layer/models/ExperimentModel';
@Route('Experiments')
export class ExperimentsController extends Controller {

    experimentDataAgent:ExperimentDataAgent = new ExperimentDataAgent();

    @Response<IErrorResponse>('404','no such experiment exists' )
    @Get('{experimentId}')
    public async GetExperimentById(experimentId: string): Promise<IExperimentResponse> {
        let result = await this.experimentDataAgent.getExperimentById(experimentId);
        if (result && result instanceof ExperimentModel) {
            return <IExperimentResponse>(result.getExperimentModel());
        } else {
            throw result;
        }
    }
}