import type { RecursivePartial, SingleOrMultiple } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import type { IRepulse } from "../../../Interfaces/Interactivity/Modes/IRepulse";
import { RepulseBase } from "./RepulseBase";
import { RepulseDiv } from "./RepulseDiv";

/**
 * @category Options
 */
export class Repulse extends RepulseBase implements IRepulse, IOptionLoader<IRepulse> {
    divs?: SingleOrMultiple<RepulseDiv>;

    load(data?: RecursivePartial<IRepulse>): void {
        super.load(data);

        if (data?.divs === undefined) {
            return;
        }

        if (data.divs instanceof Array) {
            this.divs = data.divs.map((s) => {
                const tmp = new RepulseDiv();

                tmp.load(s);

                return tmp;
            });
        } else {
            if (this.divs instanceof Array || !this.divs) {
                this.divs = new RepulseDiv();
            }

            this.divs.load(data.divs);
        }
    }
}
