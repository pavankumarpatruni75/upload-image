module.exports = function(res, status, successful, message, data) {

    var respObj = {
        statusCode: status,
        successful: successful,
        data: data,
        message: message
    };

    res.status(status)
    return res.json(respObj);
}