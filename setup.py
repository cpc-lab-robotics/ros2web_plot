from setuptools import setup

package_name = 'ros2web_plot'

setup(
    name=package_name,
    version='0.0.0',
    packages=[package_name],
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ],
    install_requires=['setuptools', 'ros2web'],
    zip_safe=True,
    maintainer='tygoto',
    maintainer_email='tygoto@me.com',
    description='TODO: Package description',
    license='TODO: License declaration',
    entry_points={
        'ros2web.extension': [
            'plot = ros2web_plot.extension:ROS2WebExtension'
        ],
    },
    package_data={
        'ros2web_plot': [
            'data/**/*',
        ],
    },
)
