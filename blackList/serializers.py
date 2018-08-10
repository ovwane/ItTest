from rest_framework import serializers

from blackList.models import BlackList, FeedBack


class BlackListSerializer(serializers.ModelSerializer):
    """
    黑名单序列化
    """
    createTime = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False, read_only=True)

    class Meta:
        model = BlackList
        fields = ('id', 'CompanyName', 'CompanyAddress', 'ComplainData', 'createTime')


class BlackListDeserializer(serializers.ModelSerializer):
    """
    黑名单反序列化
    """
    class Meta:
        model = BlackList
        fields = ('id', 'CompanyName', 'CompanyAddress', 'ComplainData', 'createTime')


class FeedBackSerializer(serializers.ModelSerializer):
    """
    面试反馈序列化
    """
    createTime = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False, read_only=True)
    InterviewTime = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", required=False, read_only=True)

    class Meta:
        model = FeedBack
        fields = ('id', 'CompanyName', 'CompanyAddress', 'SalaryRange', 'InterviewTime', 'InterviewPost',
                  'InterviewNumb', 'CompanyImage', 'InterviewerImpression', 'InterviewerLong', 'outsourcing',
                  'outsourcingNature', 'WriteQuestion', 'CommunicationKey', 'InterviewSummaryToCompany', 'welfare',
                  'InterviewSummaryToPerson', 'createTime')


class FeedBackDeserializer(serializers.ModelSerializer):
    """
    面试反馈反序列化
    """
    class Meta:
        model = FeedBack
        fields = ('id', 'CompanyName', 'CompanyAddress', 'SalaryRange', 'InterviewTime', 'InterviewPost',
                  'InterviewNumb', 'CompanyImage', 'InterviewerImpression', 'InterviewerLong', 'outsourcing',
                  'outsourcingNature', 'WriteQuestion', 'CommunicationKey', 'InterviewSummaryToCompany', 'welfare',
                  'InterviewSummaryToPerson')
