const styles = theme => ({
    taskboard: {
        alignItems: 'center'
    },
    shape: {
        padding: '15px 30px' ,
        margin: 10,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.color.primary,
        color: theme.shape.textColor
    }
});

export default styles