import {Avatar,Divider} from 'antd'
import '../static/style/components/Author.css'

const Author = () => {
    return(
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="/static/images/blogtouxiang.jpg" />
                <div className="author-txt">菜鸟晨</div>
                <div className="author-introduction">
                    码而不思则殆，思而不码也是殆。
                    <Divider>
                        社交账号
                    </Divider>
                    <Avatar size={28} icon="github" className="account"  />
                    <Avatar size={28} icon="qq"  className="account" />
                    <Avatar size={28} icon="wechat"  className="account"  />
                </div>
            </div>
        </div>
    )
}

export default Author
