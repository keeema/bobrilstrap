interface JQuery {
  typeahead(command?: string): void;

  typeahead(command?: ITypeaheadOptions<TValue>): void;
}

interface ITypeaheadOptions<TValue> {
  source: TValue[] | ITypeaheadSourceCallback<TValue>;
  items?: number;
  minLength?: number;
  matcher?: (item: TValue) => boolean;
  sorter?: (items: TValue[]) => TValue[];
  updater?: (item: TValue) => TValue;
  highlighter?: (item: TValue) => string;
}
