'use strict';

import Data from './Data';
import { mix } from 'mixwith/src/mixwith';
import DependenciesAware from './../Mixins/DependenciesAware';

/**
 * @class Meta Method Data
 *
 * @description Holds arbitrary data about a given method
 *
 * @extends Data
 *
 * @author Alin Eugen Deac <aedart@gmail.com>
 */
export default class MethodData extends mix(Data).with(DependenciesAware) {

}