import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Link, Outlet} from "react-router-dom";
const { Header, Content, Footer } = Layout;
const LayoutCore = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

 const   menuitem=[
        {
            key: '1',
            label: (
                <Link to='/'>
                    Home
                </Link>
            ),
        },
    ]

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div
                    style={{
                        float:"left",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                    }}
                >LOGO</div>
                <Link to={"/create_plane"}>
                <div
                    style={{
                        borderRadius:5,
                        float:"right",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        width: 120,
                        height: 31,
                        margin: '16px 24px 16px 0',
                        background: 'rgba(255, 255, 255, 0.2)',
                        color:"#FFF",
                        cursor:"pointer"
                    }}
                >
                    create
                </div>
                </Link>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={menuitem}
                />

            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                }}
            >
                <div
                    style={{
                        marginTop:20,
                        padding: 24,
                        minHeight: 650,
                        background: colorBgContainer,
                    }}
                >
                   <Outlet/>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Sherzod Qodirov ©2023
            </Footer>
        </Layout>
    );
};
export default LayoutCore;