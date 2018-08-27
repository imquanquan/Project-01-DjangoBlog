# Generated by Django 2.0.5 on 2018-08-27 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0024_auto_20180827_1937'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserIp',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip', models.CharField(max_length=50, verbose_name='IP地址')),
                ('count', models.ImageField(default=0, upload_to='', verbose_name='访问次数')),
                ('visit_time', models.DateField(verbose_name='最近访问时间')),
            ],
            options={
                'verbose_name': '访问用户信息',
                'verbose_name_plural': '访问用户列表',
            },
        ),
        migrations.CreateModel(
            name='VisitCount',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=0, verbose_name='网站访问总次数')),
            ],
            options={
                'verbose_name': '网站访问总次数',
                'verbose_name_plural': '网站访问总次数',
            },
        ),
    ]
