declare module 'react-admin';

declare module 'admin-on-rest' {
    function jsonServerRestClient(url: string): Promise<{type: string, resource: string, param: {}}>;

    class Admin extends React.Component<{
        restClient: Promise<{type: string, resource: string, param: {}}>,
        title ?: string,
        dashboard?: React.Component<void, void>,
        theme?: __MaterialUI.Styles.MuiTheme,
        appLayout?: React.Component<void, void>
    }, void> {}

    class Resource extends React.Component<{
        name: string,
        icon?: typeof __MaterialUI.SvgIcon,
        options?: {label: string}
    }, void> {}

    class Filter extends React.Component<void, void> {}

    class List extends React.Component<{
        title?: string | JSX.Element,
        perPage?: number,
        defaultSort?: {field: string, order: 'ASC'|'DESC'},
        actions?: React.Component<void, void>,
        filter?: JSX.Element,
        pagination?: JSX.Element
    }, void> {}

    class DataGrid extends React.Component<{
        styles?: {
            table?: {},
                tbody?: { },
                tr?: { },
                header?: {
                    th?: { },
                    'th:first-child'?: { },
                },
                cell?: {
                    td?: { },
                    'td:first-child'?: { }
                }
        },
        rowStyle?: (record: {}, index: number) => string
    }, void> {}
}

declare module 'admin-on-rest/lib/mui' {
    class CreateButton extends React.Component<{
        basePath?: string
    }, void> {}

    class DeleteButton extends React.Component<{
        basePath?: string,
        record?: {}
    }, void> {}

    class EditButton extends React.Component<{
        basePath?: string,
        record?: {}
    }, void> {}
    
    class ListButton extends React.Component<{
        basePath?: string
    }, void> {}
    
    class SavingButton extends React.Component<{
        saving?: boolean
    }, void> {}
    
    class ShowButton extends React.Component<{
        basePath?: string,
        record?: {}
    }, void> {}

    
    class Delete extends React.Component<{
        title?: string | JSX.Element
    }, void> {}

    class Create extends React.Component<{
        actions?: JSX.Element,
        title?: string | JSX.Element
    }, void> {}

    class Edit extends React.Component<{
        actions?: JSX.Element,
        title?: string | JSX.Element
    }, void> {}

    class Show extends React.Component<{
        title?: string | JSX.Element
    }, void> {}
    
    abstract class Form extends React.Component<{
        defaultValue?: { },
        validation?: (record: { }) => {}
    }, void> {}
    class SimpleForm extends Form {}
    class TabbedForm extends Form {}

    interface InputProps {
        source: string,
        defaultValue?: any,
        validation?: (record: { }) => {},
        label?: string,
        style?: { },
        elStyle?: { }
    }

    interface SelectProps extends InputProps {
        choices?: Array<{}>,            // optional if using ReferenceInput
        optionText?: string | ((value: any) => string),
        optionValue?: string,
        filter?: ((searchText: string, key: string, item?: any) => boolean),
        options?: __MaterialUI.SelectFieldProps
    }

    interface AutocompleteInputProps extends SelectProps {
        options?: __MaterialUI.AutoCompleteProps<any>
    }
    class AutocompleteInput extends React.Component<AutocompleteInputProps, void> {}
    class BooleanInput extends React.Component<InputProps, void> {}
    class NullableInput extends React.Component<InputProps, void> {}
    interface DateInputProps extends InputProps {
        options?: { } // TODO: use __MaterialUI ({ }Props isn't exported)
    }
    class DateInput extends React.Component<DateInputProps, void> {}
    class DisabledInput extends React.Component<InputProps, void> {}
    class LongTextInput extends React.Component<InputProps, void> {}
    interface NumberInputProps extends InputProps {
        step?: number
    }
    class NumberInput extends React.Component<NumberInputProps, void> {}
    class RadioButtonGroupInput extends React.Component<SelectProps, void> {}
    interface ReferenceInputProps extends InputProps {
        allowEmpty?: boolean,
        reference: string,
        perPage?: number,
        sort?: {field: string, order: 'ASC'|'DESC'},
        filter?: { [s: string]: boolean; },
        filterToQuery?: () => {},
    }
    class ReferenceInput extends React.Component<ReferenceInputProps, void> {}
    interface RichTextInputProps extends InputProps {
        toolbar?: {}
    }
    class RichTextInput extends React.Component<RichTextInputProps, void> {}
    interface SelectInputProps extends SelectProps {
        allowEmpty?: boolean
    }
    class SelectInput extends React.Component<SelectInputProps, void> {}
    interface TextInputProps extends InputProps {
        type?: string
    }
}