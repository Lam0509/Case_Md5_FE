import Layout from "../../../components/user/Layout";
import store from "../../../store/store";
import {Provider} from "react-redux";
import React from "react";
import FoodDetail from "../../../components/user/FoodDetail";
import RecentComments from "../../../components/user/RecentComments";
import axios from "axios";

export default function UserHome(props) {
    return (
        <Provider store={store}>
            <Layout>
                <FoodDetail>
                    <RecentComments/>
                </FoodDetail>
            </Layout>
        </Provider>

    )
}