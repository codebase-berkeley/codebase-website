import os
import pipes

def postBuild(site):
    os.system(
        'sass -t compressed --update %s/~codebase/static/css/*.sass' %
            pipes.quote(site.paths['build']
    ))
