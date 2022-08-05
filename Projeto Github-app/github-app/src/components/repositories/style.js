import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel }  from "react-tabs";

export const TabsStyle = styled(Tabs) `
    font-size: 16px;
    width: 100%;
`
export const TabListStyle = styled(TabList) `
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`
TabListStyle.tabsRole = "TabList";

export const TabStyle = styled(Tab) `
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 16px;
    user-select: none;
    cursor: pointer;
    margin-top: 16px;
    
    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.2);
    }
`
TabStyle.tabsRole = "Tab";

export const TabPanelStyle = styled(TabPanel) `
    display: none;
    padding: 16px;
    border: 1px solid "#ccc";
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`
