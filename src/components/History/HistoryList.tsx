import Regiment from "@/components/History/Regiment";
import OperationBurza from "@/components/History/OperationBurza";
import DebicaDistrict from "@/components/History/DebicaDistrict";

export default function HistoryList() {
  return (
    <>
      <ul>
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
