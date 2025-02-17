import Regiment from "@/components/History/Regiment";
import OperationBurza from "@/components/History/OperationBurza";
import DebicaDistrict from "@/components/History/DebicaDistrict";

export const HistoryList = () => {
  return (
    <section>
      <ul className="flex flex-col gap-10">
        <li>
          <Regiment />
        </li>
        <li>
          <OperationBurza />
        </li>
        <li>
          <DebicaDistrict />
        </li>
      </ul>
    </section>
  );
};
