import Regiment from "@/components/History/Regiment";
import OperationBurza from "@/components/History/OperationBurza";
import DebicaDistrict from "@/components/History/DebicaDistrict";

export default function HistoryList() {
  return (
    <>
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
    </>
  );
}
