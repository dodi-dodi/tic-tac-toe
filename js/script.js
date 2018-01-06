const element = (
    <div>
        <div className="flex flex-space-between">
            <h2>
                Player 1:
                <span><i className="fa fa-times fa-times-color fa-2x"/></span>
            </h2>
            <h2>
                Player 2:
                <span><i className="fa fa-circle-o fa-circle-color fa-2x"/></span>
            </h2>
        </div>
        <div>
            <div className="flex flex-center">
                <div className="square">
                    <div className="icon-auto flex flex-center">
                        <i className="fa fa-times fa-times-color  fa-large"/>
                    </div>
                </div>
                <div className="square border-vertical">
                    <button className="button-auto button-background"/>
                </div>
                <div className="square">
                    <div className="icon-auto flex flex-center">
                        <i className="fa fa-circle-o fa-circle-color fa-large"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-center">
                <div className="square border-horizontal">
                    <button className="button-auto  button-background"/>
                </div>
                <div className="square border-horizontal border-vertical">
                    <button className="button-auto  button-background"/>
                </div>
                <div className="square border-horizontal">
                    <button className="button-auto  button-background"/>
                </div>
            </div>
            <div className="flex flex-center">
                <div className="square">
                    <button className="button-auto  button-background"/>
                </div>
                <div className="square border-vertical">
                    <button className="button-auto  button-background"/>
                </div>
                <div className="square">
                    <button className="button-auto  button-background"/>
                </div>
            </div>
        </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById("root")
);
