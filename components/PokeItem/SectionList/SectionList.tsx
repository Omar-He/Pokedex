import { removeDashes } from "@/utils/helper";
import React from "react";
import { StyledSectionList } from "./styled";

interface sectionItemsType {
  stat?: { name: string };
  base_stat?: number;
  item?: { name: string };
  move?: { name: string };
}
interface SectionProps {
  sectionItems: Record<string, any>[] | undefined;
  sectionKey: string;
}

const SectionList = ({ sectionItems, sectionKey }: SectionProps) => {
  const isEmptyList = sectionItems?.length === 0;
  const isStatSection = sectionKey === "stat";

  return (
    <StyledSectionList>
      {sectionItems?.map((item, key) => (
        <li key={key}>
          <span>{removeDashes(item[sectionKey].name)}</span>
          {isStatSection && (
            <span className="base-stat">{item["base_stat"]}</span>
          )}
        </li>
      ))}
      {isEmptyList && (
        <span className="not-found">{`No ${sectionKey}s found...`}</span>
      )}
    </StyledSectionList>
  );
};

export default SectionList;
