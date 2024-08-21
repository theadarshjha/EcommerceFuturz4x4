// Types/Filter.ts
export type FiltersType = {
    [key: string]: string[];
  };
  
  export type SubCategoryType = keyof FiltersType;
  